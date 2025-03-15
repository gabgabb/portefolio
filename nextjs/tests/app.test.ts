import { expect, test } from "@playwright/test";

test.describe("Portfolio Tests", () => {
    // Navigate to the homepage before each test (using relative URL)
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Homepage loads correctly", async ({ page }) => {
        await expect(page).toHaveTitle(/Gabriel Filiot/);
        await expect(
            page.getByRole("heading", { name: /full stack developer/i }),
        ).toBeVisible();
    });

    test("Click on CV link redirects to CV page", async ({
        page,
        isMobile,
    }) => {
        test.skip(isMobile, "Skipping CV link test on mobile devices");

        const cvLink = page
            .getByRole("banner")
            .getByRole("link", { name: "Resume" });
        await expect(cvLink).toBeVisible();

        // Click the CV link and wait for URL change (using relative URL matching)
        await cvLink.click();
        await expect(page).toHaveURL(/\/cv$/);

        // Verify that the CV element is visible on the page
        await expect(page.getByTestId("cv")).toBeVisible();
    });

    test("Switch language to English", async ({ page }) => {
        // Click the "EN" button to change language
        const englishButton = page.getByRole("button", {
            name: "EN",
            exact: true,
        });
        await expect(englishButton).toBeVisible();
        await englishButton.click();

        // Verify that the URL changes to include "/en" and that the page displays English text
        await expect(page).toHaveURL(/\/en/);
        await expect(
            page.getByRole("heading", { name: /full stack developer/i }),
        ).toBeVisible();
    });

    test("Switch language to French", async ({ page }) => {
        // Start from the English version by navigating to /en
        await page.goto("/en");
        const frenchButton = page.getByRole("button", { name: "FR" });
        await expect(frenchButton).toBeVisible();
        await frenchButton.click();

        // Verify that the URL changes to include "/fr" and that the page displays French text
        await expect(page).toHaveURL(/\/fr/);
        await expect(
            page.getByRole("heading", { name: /Développeur Full Stack/i }),
        ).toBeVisible();
    });

    test("GitHub link works", async ({ page, context, isMobile }) => {
        test.skip(isMobile, "Skipping GitHub link test on mobile devices");

        // Intercept the new page that opens when clicking the GitHub link
        const githubLink = page
            .getByRole("banner")
            .getByRole("link", { name: "Github" })
            .first();
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            githubLink.click(),
        ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain("github.com/gabgabb");
    });

    test("CV link is present", async ({ page, isMobile }) => {
        test.skip(isMobile, "Skipping CV link test on mobile devices");

        const cvLink = page
            .getByRole("banner")
            .getByRole("link", { name: "Resume" });
        await expect(cvLink).toBeVisible();
    });

    test("LinkedIn link works", async ({ page, context, isMobile }) => {
        test.skip(isMobile, "LinkedIn link test on mobile devices");

        // Intercept the new page that opens when clicking the LinkedIn link
        const linkedinLink = page
            .getByRole("banner")
            .getByRole("link", { name: "Linkedin" })
            .first();
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            linkedinLink.click(),
        ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain("linkedin.com/in/gabriel-filiot");
    });
});
