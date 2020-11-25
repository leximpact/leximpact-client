import { createShallow } from "@material-ui/core/test-utils";

import { Connexion } from "../Connexion";

describe("components | connexion | index", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = {
        onClosePopin: jest.fn(),
      };
      const wrapper = shallow(<Connexion {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
