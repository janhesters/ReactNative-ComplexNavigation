import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { View } from 'react-native';

const createTestProps = (props: Object) => ({
  ...props
});

describe("App", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<App {...props} />);
    });

    it("should render a <View />", () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});
