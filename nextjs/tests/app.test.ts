import { expect, test } from "@playwright/test";

test.describe("Portfolio Tests", () => {
    test("Next.js homepage loads correctly", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page).toHaveTitle(/Gabriel Filiot/);
        await expect(page.getByRole("heading", { name: "Full stack developer" })).toBeVisible();
    });

    test("GitHub link works", async ({ page, context }) => {
        await page.goto("http://localhost:3000");

        // Intercepter la nouvelle page (nouvel onglet)
        const [newPage] = await Promise.all([
            context.waitForEvent("page"), // Attend l'ouverture d'une nouvelle page
            page.getByRole("link", { name: "Github" }).first().click(), // Clique sur le lien
        ]);

        // Vérifier que l'URL contient "github.com/gabgabb"
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain("github.com/gabgabb");
    });

    test("CV link is present", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page.getByRole("link", { name: "CV" })).toBeVisible();
    });

    test("LinkedIn link works", async ({ page, context }) => {
        await page.goto("http://localhost:3000");

        // Intercepter l'ouverture de la nouvelle page
        const [newPage] = await Promise.all([
            context.waitForEvent("page"), // Attend l'ouverture d'un nouvel onglet
            page.getByRole("link", { name: "Linkedin" }).first().click(), // Clique sur le lien
        ]);

        // Attendre que la nouvelle page soit complètement chargée
        await newPage.waitForLoadState();

        // Vérifier que l'URL contient "linkedin.com/in/gabriel-filiot"
        expect(newPage.url()).toContain("linkedin.com/in/gabriel-filiot");
    });

    test("About Me section is visible", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page.getByText(/Développeur Full Stack français basé à Nantes/)).toBeVisible();
    });

    //test("Projects section loads", async ({ page }) => {
    //  await page.goto("http://localhost:3000");
    //await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    //});
});
