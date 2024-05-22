/* eslint-disable react/prop-types */


const Title = ({title, subTitle}) => {
    return (
        <div className="title-container">
            <h2>{title}</h2>
            <p className="sub-title">{subTitle}</p>
        </div>
    );
};

export default Title;