type Params = { tag?: string };

export default async function TestPage({ searchParams }: { searchParams: Promise<Params> }) {
  const { tag } = await searchParams;

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Explore {!!tag && `by #${tag}`}</h1>
    </div>
  );
}
