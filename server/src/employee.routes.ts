import * as express from "express";
import { ObjectId } from "mongodb";
import { collections } from "./database.ts";


export const employeeRouter = express.Router();

employeeRouter.use(express.json());

// Get all employees
employeeRouter.get("/", async (_req, res) => {
    try {
        const employees = await collections?.employees?.find({}).toArray();
        res.status(200).send(employees);
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.error("Error getting All employees:", message);
        res.status(500).send(message);
    }
});

// Get employee by ID
employeeRouter.get("/:id", async (req, res) => {

    try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const employee = await collections?.employees?.findOne(query);
        if (employee) {
            res.status(200).send(employee);
        } else {
            res.status(404).send("Employee not found");
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.error("Error getting an employee:", message);
        res.status(400).send(message);
    }
});

// Create a new employee
employeeRouter.post("/", async (req, res) => {
    try {
        const newEmployee = req.body;
        const result = await collections?.employees?.insertOne(newEmployee);
        if ( result?.acknowledged) {
            res.status(201).send({ ...newEmployee, _id: result?.insertedId });
            console.log(`Created a new employee with id ${result.insertedId}`);

        } else {
            res.status(500).send("Failed to create a new employee");
            // throw new Error("Failed to create a new employee");
        }
        
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.error("Error creating a new employee:", message);
        res.status(400).send(message);
    }
}); 

// Update an existing employee
employeeRouter.put("/:id", async (req, res) => {
    
    try {
        const id = req?.params?.id;
        const updatedEmployee = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections?.employees?.updateOne(
            query, 
            { $set: updatedEmployee }
        );

        if (result && result?.matchedCount) {
            res.status(200).send(`Successfully updated employee with id: ${id}`);
        } else {
            res.status(404).send(`Employee not found with id: ${id} `);
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.error("Error updating an employee:", message);
        res.status(400).send(message);
    }
});

// Delete an employee
employeeRouter.delete("/:id", async (req, res) => {

    try {
        const id = req?.params?.id;
        const query = { _id: new ObjectId(id) };
        const result = await collections?.employees?.deleteOne(query);

        if (result && result?.deletedCount) {
            res.status(202).send(`Successfully deleted employee with id: ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to delete employee with id: ${id}`); 
        } else if (!result?.deletedCount) {
            res.status(404).send(`Employee not found with id: ${id}`);
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.error("Error deleting employee:", message);
        res.status(400).send(message);
    }
});