"use client";
import useSWR from "swr";

const DataDisplay = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const firstData = useSWR("/api/first-list", fetcher);
	const secondData = useSWR("/api/second-list", fetcher);

	if (firstData.error || secondData.error)
		return (
			<div>
				<p>an error occurred while fetching data</p>
			</div>
		);
	if (!firstData.data)
		return (
			<div>
				<p>loading...</p>
			</div>
		);
	if (!secondData.data)
		return (
			<div>
				<p>loading...</p>
			</div>
		);

	console.log("first data");
	console.log(firstData.data);

	console.log("second data");
	console.log(secondData.data);
	const ex = secondData.data[0];
	console.log(ex);

	return (
		<div className="w-3/5 flex flex-wrap justify-center">
			{firstData.data.map((childOne: { title: string }, i: number) => {
				const childTwo: { description: string } = secondData.data[i];
				return (
					<div className="rounded-md bg-blue-300 m-2 p-2">
						<h3 className="text-xl">{childOne.title}</h3>
						<p>{childTwo.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default DataDisplay;
