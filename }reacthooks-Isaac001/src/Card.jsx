function Card({ title, paragraph, image, model }) {
  return (
    <div className="bg-white shadow-md rounded p-4 flex flex-col justify-between">
      <img src={image} alt={title} className="h-40 object-contain mx-auto mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-4">{paragraph.slice(0, 100)}...</p>
      <p className="font-bold text-green-600">${model}</p>
    </div>
  );
}

export default Card;
