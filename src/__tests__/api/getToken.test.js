import { getToken } from "api";

it("gets the token from a request", () => {
  const request = {
    session: {
      passport: {
        user: {
          accessToken: "yup!",
        },
      },
    },
  };
  const token = getToken(request);
  expect(token).toBe("yup!");
});
