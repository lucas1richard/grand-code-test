import styled from 'styled-components';

export const Input = styled.input.attrs({
  'data-tag': 'input'
})`
  color: #174460;
  font-weight: bold;
`;

export const Container = styled.div.attrs({
  className: 'container',
  'data-tag': 'div'
})`
  height: 100%;
  background: #fff;
`;

export const A = styled.a.attrs({
  'data-tag': 'a'
})`
  color: #174460;
  font-weight: bold;
`;

export const NP = styled.i.attrs({
  'data-after': 'None Provided',
  'data-tag': 'i'
})`
  font-size: 0.84em;
  ::after {
    content: 'None Provided';
  }
`;

export const Li = styled.li.attrs({
  'data-tag': 'li'
})`
  font-size: 1.3em;
  color: #939EAD;
  @media screen and (max-width: 800px) {
    font-size: 1.2em;
  }
`;

export const H1 = styled.h1.attrs({
  'data-tag': 'h1'
})`
  color: #4ECBC2;
`;

export const Sort = styled.button.attrs({
  className: 'btn btn-default btn-xs',
  'data-tag': 'button'
})`
  font-weight: bold;
`;

export const Label = styled.label.attrs({
  'data-tag': 'label'
})`
  color: rgba(19, 45, 81, 0.5);
`;