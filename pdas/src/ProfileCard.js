function ProfileCard({ title, handle, image }) {
  //const { title, handle } = props;
  return (
    <div>
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>{handle}</div>
    </div>
  );
}

export default ProfileCard;
