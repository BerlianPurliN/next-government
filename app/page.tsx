import Link from "next/link";

const Dashboard = () => {
    return (
    <>
    <Link href="/countries" >Country (This One Fail)</Link><br />
    <Link href="/country" >Country</Link>
    </>
)
}

export default Dashboard;