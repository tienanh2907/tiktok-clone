import PropTypes from 'prop-types';
import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node,
};

export default HeaderOnly;
