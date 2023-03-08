import { render, screen } from "@testing-library/react";
import Async from "./Async";
import jest from 'jest-mock';

describe("Async component", () => {

  test("Renders posts if requests succeeds", async () => {

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post"}]
    });

    render(<Async />);
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });

});