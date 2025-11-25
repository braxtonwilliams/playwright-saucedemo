import { BASE_URL } from "./config";

export async function login(page, username: string, password: string) {
    await page.goto(BASE_URL);
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
}