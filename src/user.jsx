import PropTypes from 'prop-types'
const User=(props)=> {
    const { data } = props;
    return (
        <div>
            <h1>User Component</h1>
            <h4>{data?.name}</h4>
            <h4>{data?.age}</h4>
        </div>
    )

};

User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired, // Adjust based on your data structure
        age: PropTypes.string.isRequired, // Adjust based on your data structure
    }),
};

export default User;