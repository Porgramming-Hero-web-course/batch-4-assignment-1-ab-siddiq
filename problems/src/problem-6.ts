{
    interface Profile{
        name: string,
        age: number,
        email: string
    }

    const updateProfile = (obj: Profile, update: Partial<Profile>):Profile => {
        return {...obj,...update}
    }

    const myProfile : Profile = { name: "Alice", age: 25, email: "alice@example.com" }
    console.log(updateProfile(myProfile, { age: 26 }))
}