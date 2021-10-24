// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function imageAPI(req, res) {
  const image = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=DOKWuA_1rY1YVYX0ZtjkGrUvn3in0pnGScx8xriN1vY",
    { method: "GET" }
  );

  const d = await image.json();

  console.log(image);

  res.status(200).json(d);
}
