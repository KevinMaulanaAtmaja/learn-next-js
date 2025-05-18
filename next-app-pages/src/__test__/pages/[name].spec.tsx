import UserSettingPage from "@/pages/setting/user/[name]";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/setting/user/[name]",
            pathname: "/setting/user/[name]",
            query: { name: "Kevin" },
            asPath: "/setting/user/kevin",
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn(),
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null),
            isReady: true,
        };
    },
}));

describe("User Page", () => {
    it("render user page", () => {
        const page = render(<UserSettingPage />);
        expect(screen.getByTestId("title").textContent).toBe("Detail User:");
        expect(screen.getByText(/Name: Kevin/i)).toBeInTheDocument();
        expect(page).toMatchSnapshot();
    });
});
