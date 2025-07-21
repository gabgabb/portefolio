import { expect, test } from "@playwright/test";

test.describe("Portfolio Tests", () => {
    // Navigate to the homepage before each test using a relative URL
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
        if (isMobile) {
            // On mobile, open the drawer menu first.
            const drawerButton = page.getByRole("button", { name: /menu/i });
            await expect(drawerButton).toBeVisible();
            await drawerButton.click();

            // Then get the "Resume" link from the drawer.
            const cvLink = page.getByRole("link", { name: "Resume" });
            await expect(cvLink).toBeVisible();
            await cvLink.click();
        } else {
            // On desktop, get the "Resume" link directly from the banner.
            const cvLink = page
                .getByRole("banner")
                .getByRole("link", { name: "Resume" });
            await expect(cvLink).toBeVisible();
            await cvLink.click();
        }
        await page.waitForTimeout(2000);
        await expect(page).toHaveURL(/\/cv$/);
        await expect(page.getByTestId("cv")).toBeVisible();
    });

    test("Switch language to English", async ({ page }) => {
        // Click the "EN" button to change language
        const englishButton = page.getByTestId("locale-en");
        await expect(englishButton).toBeVisible();
        await englishButton.click();

        // Verify that the URL changes to include "/en" and that the page displays English text
        await expect(page).toHaveURL(/\/en/);
        await expect(
            page.getByRole("heading", { name: /full stack developer/i }),
        ).toBeVisible();
    });

    test("Switch language to French", async ({ page }) => {
        // Navigate to the English version before switching back to French
        await page.goto("/en");
        const frenchButton = page.getByTestId("locale-fr");
        await expect(frenchButton).toBeVisible();
        await frenchButton.click();

        // Verify that the URL changes to include "/fr" and that the page displays French text
        await expect(page).toHaveURL(/\/fr/);
        await expect(
            page.getByRole("heading", { name: /Développeur Full Stack/i }),
        ).toBeVisible();
    });

    test("GitHub link works", async ({ page, context, isMobile }) => {
        if (isMobile) {
            // On mobile, open the drawer menu first.
            const drawerButton = page.getByRole("button", { name: /menu/i });
            await expect(drawerButton).toBeVisible();
            await drawerButton.click();

            // Then, get the GitHub link from the drawer.
            const githubLink = page
                .getByRole("link", { name: "Github" })
                .first();
            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                githubLink.click(),
            ]);
            await newPage.waitForLoadState();
            expect(newPage.url()).toContain("github.com/gabgabb");
        } else {
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
        }
    });

    test("CV link is present", async ({ page, isMobile }) => {
        if (isMobile) {
            // On mobile, open the drawer menu to access the link.
            const drawerButton = page.getByRole("button", { name: /menu/i });
            await expect(drawerButton).toBeVisible();
            await drawerButton.click();

            const cvLink = page.getByRole("link", { name: "Resume" });
            await expect(cvLink).toBeVisible();
        } else {
            const cvLink = page
                .getByRole("banner")
                .getByRole("link", { name: "Resume" });
            await expect(cvLink).toBeVisible();
        }
    });

    test("LinkedIn link works", async ({ page, context, isMobile }) => {
        if (isMobile) {
            // On mobile, open the drawer menu first.
            const drawerButton = page.getByRole("button", { name: /menu/i });
            await expect(drawerButton).toBeVisible();
            await drawerButton.click();

            // Then, get the LinkedIn link from the drawer.
            const linkedinLink = page
                .getByRole("link", { name: "Linkedin" })
                .first();
            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                linkedinLink.click(),
            ]);
            await newPage.waitForLoadState();
            expect(newPage.url()).toContain("linkedin.com/in/gabriel-filiot");
        } else {
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
        }
    });
});
