import {test,expect} from '@playwright/test';
import { request } from 'http';

let response;
let responseBody;

test ("Get Users", async ({request})=>{ // buraya requesti giriyoruz

response = await request.get("https://reqres.in/api/users/2");
responseBody = await response.json();
console.log(responseBody); // donen bodyi consolda gormek icin
expect(response.status()).toBe(200); // status kod dogrulamasi
console.log(response.status());
expect(responseBody.data.id).toBe(2); // gelen body icerisindeki datayi dogrulamak icin
console.log(responseBody.data.id);
expect(responseBody.data.first_name).toBe("Janet")
console.log(responseBody.data.first_name);

})