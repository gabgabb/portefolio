import { test, expect } from '@playwright/test';

test.describe("Portfolio Tests", () => {
    test("Next.js homepage loads correctly", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page).toHaveTitle(/Gabriel Filiot/);
        await expect(page.getByRole("heading", { name: "Full stack developer" })).toBeVisible();
    });

    test("GitHub link works", async ({ page }) => {
        await page.goto("http://localhost:3000");
        const githubLink = page.getByRole("link", { name: "Github" });
        await expect(githubLink).toBeVisible();
        await githubLink.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("github.com/gabgabb");
    });

    test("CV link is present", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page.getByRole("link", { name: "CV" })).toBeVisible();
    });

    test("LinkedIn link works", async ({ page }) => {
        await page.goto("http://localhost:3000");
        const linkedinLink = page.getByRole("link", { name: "Linkedin" });
        await expect(linkedinLink).toBeVisible();
        await linkedinLink.click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain("linkedin.com/in/gabriel-filiot");
    });

    test("About Me section is visible", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page.getByText(/Développeur Full Stack français basé à Nantes/)).toBeVisible();
    });

    test("Projects section loads", async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    });
});
