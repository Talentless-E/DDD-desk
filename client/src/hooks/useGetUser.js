export const useGetUser = async(id) => {
    const savedUserData = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user${id}`,{
        method: 'GET',
        headers: {"Content-type": "application/json"},
    })
    const savedUser = await savedUserData.json()
    if (savedUser) return savedUser
    else return new Error('No user found')
}
