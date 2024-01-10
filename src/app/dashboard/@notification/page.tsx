import Card from "@/components/card"
import Link from "next/link"

function Notification() {
  return (
    <>
    <Card>
    <div>Notification page</div>
    <Link href="/dashboard/archived">archived</Link>
    </Card>
    
    </>
  )
}

export default Notification