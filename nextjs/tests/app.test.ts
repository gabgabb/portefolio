import { expect, test } from "@playwright/test";

test.describe("Portfolio Tests", () => {
    test("Next.js homepage loads correctly", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page).toHaveTitle(/Gabriel Filiot/);
        await expect(
            page.getByRole("heading", { name: "Full stack developer" }),
        ).toBeVisible();
    });

    test("Click on CV link redirects to CV page", async ({
        page,
        isMobile,
    }) => {
        if (isMobile) {
            // Skip the test on mobile devices
            return;
        }

        await page.goto("http://localhost:3000");

        await page.waitForTimeout(3000);

        // Clique sur le lien "CV"
        await page
            .getByRole("banner")
            .getByRole("link", { name: "Resume" })
            .click();

        await page.waitForTimeout(3000);

        // Vérifier que l'URL contient "/cv"
        await expect(page).toHaveURL(/\/cv$/);

        await page.waitForTimeout(3000);

        // Vérifier que la page affiche un élément propre au CV
        await expect(page.getByTestId("cv")).toBeVisible();
    });

    test("Switch language to English", async ({ page }) => {
        await page.goto("http://localhost:3000");

        // Clique sur "EN" pour changer la langue
        await page.getByRole("button", { name: "EN", exact: true }).click();

        // Vérifier que l'URL a bien changé vers "/en"
        await expect(page).toHaveURL(/\/en/);

        // Vérifier que le texte de la page est bien en anglais
        await expect(
            page.getByRole("heading", { name: "Full stack developer" }),
        ).toBeVisible();
    });

    test("Switch language to French", async ({ page }) => {
        await page.goto("http://localhost:3000/en");

        // Clique sur "FR" pour revenir en français
        await page.getByRole("button", { name: "FR" }).click();

        // Vérifier que l'URL a bien changé vers "/fr"
        await expect(page).toHaveURL(/\/fr/);

        // Vérifier que le texte est bien en français
        await expect(
            page.getByRole("heading", { name: "Développeur Full Stack" }),
        ).toBeVisible();
    });

    test("GitHub link works", async ({ page, context }) => {
        await page.goto("http://localhost:3000");

        // Intercepter la nouvelle page (nouvel onglet)
        const [newPage] = await Promise.all([
            context.waitForEvent("page"), // Attend l'ouverture d'une nouvelle page
            page
                .getByRole("banner")
                .getByRole("link", { name: "Github" })
                .first()
                .click(), // Clique sur le lien
        ]);

        // Vérifier que l'URL contient "github.com/gabgabb"
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain("github.com/gabgabb");
    });

    test("CV link is present", async ({ page, isMobile }) => {
        if (isMobile) {
            // Skip the test on mobile devices
            return;
        }

        await page.goto("http://localhost:3000");

        await page.waitForTimeout(3000);

        await expect(
            page.getByRole("banner").getByRole("link", { name: "Resume" }),
        ).toBeVisible();
    });

    test("LinkedIn link works", async ({ page, context }) => {
        await page.goto("http://localhost:3000");

        // Intercepter l'ouverture de la nouvelle page
        const [newPage] = await Promise.all([
            context.waitForEvent("page"), // Attend l'ouverture d'un nouvel onglet
            page
                .getByRole("banner")
                .getByRole("link", { name: "Linkedin" })
                .first()
                .click(), // Clique sur le lien
        ]);

        // Attendre que la nouvelle page soit complètement chargée
        await newPage.waitForLoadState();

        // Vérifier que l'URL contient "linkedin.com/in/gabriel-filiot"
        expect(newPage.url()).toContain("linkedin.com/in/gabriel-filiot");
    });

    // test("About Me section is visible", async ({ page }) => {
    //     await page.goto("http://localhost:3000");
    //     await expect(page.getByText(/Développeur Full Stack français basé à Nantes/)).toBeVisible();
    // });

    //test("Projects section loads", async ({ page }) => {
    //  await page.goto("http://localhost:3000");
    //await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    //});
});
