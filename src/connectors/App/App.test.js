import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});

it('should output a function', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toEqual({})
});

test('Fake Test', () => {
  expect(true).toBeTruthy();
});

it('Fake Test', () => {
  expect(true).toBeTruthy();
});


const sum = (x, y) => {
  if (typeof y !== 'number') {
    throw new Error('my error')
  }
  if (typeof x === 'string') {
    throw new Error('my error')
  }
  if (typeof x === 'boolean') {
    throw new Error('my error')
  }
  if (typeof x === 'object') {
    throw new Error('my error')
  }
  if (typeof x === 'undefined') {
    throw new Error('my error')
  }
  return x + y 
}

describe('should throw an error if', () => {
   
    it('two numbers numbers', () => {
      expect(sum(1,2)).toEqual(3)
    });

    it('x is a string', () => {
      expect(() => sum('1',2)).toThrow()
    });
    it('x is a boolean', () => {
      expect(() => sum(true,2)).toThrow()
    });
    it('x is an array', () => {
      expect(() => sum([],2)).toThrow()
    });
    it('x is an object', () => {
      expect(() => sum({},2)).toThrow()
    });
    it('x is an undefined', () => {
      expect(() => sum(undefined,2)).toThrow()
    });

 });


const MyComponent = props => {

  let x = props.x;
  let y = props.y;

  if (!props.hasOwnProperty('x')) {
    x = 0
  }
  if (!props.hasOwnProperty('y')) {
    y = 0
  }

  return x + y
}

describe('should handle props where ', () => {
   
    it('x or y is undefined', () => {
      expect(MyComponent({ y: 2})).not.toEqual(NaN)
    });
    it('x is undefined', () => {
      expect(MyComponent({ y: 2})).toEqual(2)
    });
    it('y is undefined', () => {
      expect(MyComponent({x: 1})).toEqual(1)
    });
    it('y is boolean', () => {
      expect(MyComponent({x: 1, y: true})).toEqual(2)
    });

 });

const MyReactComponent = props => {

  let local_x = 0;
  let local_y = 0;

  if (!props.hasOwnProperty('x')) {
    local_x = 0
  } else {
    local_x = props.x
  }

  if (!props.hasOwnProperty('y')) {
    local_y = 0
  } else {
    local_y = props.y
  }
  const sum = local_x + local_y
  
  const jsx = <div>{sum}</div>
  return jsx
}

describe('MyReactComponent should handle props where ', () => {
  let wrapperReactComponent = shallow(<MyReactComponent />)
  it('x or y is undefined', () => {
    expect(wrapperReactComponent.text()).not.toEqual(NaN)
  });

  wrapperReactComponent = shallow(<MyReactComponent y={2} />)
  it('x is undefined', () => {
    expect(wrapperReactComponent.text()).toBe('1')
  });

  wrapperReactComponent = shallow(<MyReactComponent x={1} />)
  it('y is undefined', () => {
    expect(wrapperReactComponent.text()).toBe('1')
  });

  wrapperReactComponent = shallow(<MyReactComponent x={true} />)
  it('y is boolean', () => {
    expect(wrapperReactComponent.text()).toBe('1')
  });

});




 