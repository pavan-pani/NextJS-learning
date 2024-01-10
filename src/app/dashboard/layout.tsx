function DaahBoardlayout({
    children,users,notification,content,login
  }: {
    children: React.ReactNode,
    users: React.ReactNode,
    notification: React.ReactNode,
    content: React.ReactNode,
    login: React.ReactNode,
  }) {
    const isLogin=false
  return isLogin? (
    <div>
        <div>{children}</div>
        <div style={{display:"flex"}}>
    <div style={{display:"flex", flexDirection:"column"}}>
        {users}
        {content}
    </div>
    <div style={{display:"flex", flex:"1"}}>
        {notification}
    </div>
        </div>
    </div>
  ):(
   login
  )
}

export default DaahBoardlayout