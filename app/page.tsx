
import crypto from "crypto";
export default function Home({data}) {

    const secret = crypto.randomBytes(64).toString("hex");
    console.log(secret);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
       <h1>Data from Mongodb</h1>
       <pre>{JSON.stringify(data, null, 2)}</pre>
         {secret}
     </div>
    </main>
  );
}
