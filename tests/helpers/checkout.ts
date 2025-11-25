import { expect } from "playwright/test";
import { login } from "./auth";
import { pass, user } from "./config";

export async function checkout(page) {
    await page.click('#checkout');
}

export async function checkoutInfo(page, firstName, lastName, ZIP) {
    await page.fill('#first-name', firstName);
    await page.fill('#last-name', lastName);
    await page.fill('#postal-code', ZIP);
    await page.click('#continue');
}