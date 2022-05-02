import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe('Home page check', () => {
    it( 'snapshot Home', () => {
        const component = render(<Home/>);

        expect(component).toMatchSnapshot();
    });
});