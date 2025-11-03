import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    // getPrerenderParams: async () => {
    //   // Replace with your actual data fetching logic
    //   const ids = await fetch('/employees').then(res => res.json());
    //   return ids.map((id: any) => ({ id }));
    // }
  }
];
