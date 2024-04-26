import { z } from "zod";

const loginValidation = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(100),
});

const request = {
  username: "amangly@gmail.com",
  password: "",
};

const result = loginValidation.safeParse(request);
console.log(result);
