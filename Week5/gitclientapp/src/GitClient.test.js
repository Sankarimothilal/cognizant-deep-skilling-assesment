import GitClient from "./GitClient";
import axios from "axios";

jest.mock("axios");

describe("Git Client Tests", () => {

  test("should return repository names", async () => {

    const repos = [
      {
        id: 1,
        name: "AngularDemo"
      },
      {
        id: 2,
        name: "ReactDemo"
      }
    ];

    axios.get.mockResolvedValue({
      data: repos
    });

    const client = new GitClient();

    const result = await client.getRepositories("TechieSyed");

    expect(result).toEqual(repos);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/TechieSyed/repos"
    );

  });

});