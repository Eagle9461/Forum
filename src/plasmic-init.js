import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "7E4YdY5snJpJWFU6VKhbJJ",  // ID of a project you are using
      token: "6mx2U7SiDtOPSvC4xBtRnFXAgn1iaaJESxb0E4GRQYzfZU7b5rmmu6zdW4nuoKSyuMPAqei82CqOWJVji9eQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})