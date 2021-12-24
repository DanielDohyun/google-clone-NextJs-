const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`rounded-full h-10  cursor-pointer transition duration-150 transform hover:scale- ${className}`}
      src={url}
      alt="profile picture"
    />
  );
};

export default Avatar;
