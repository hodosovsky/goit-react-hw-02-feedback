import PropTypes from 'prop-types';
const Section = ({ title, children }) => <section>{children}</section>;

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
