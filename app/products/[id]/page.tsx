
const page = async({params} : {params : Promise<{id: string}>}) => {

    const {id} = await params
  return (
    <div>page</div>
  )
}

export default page

