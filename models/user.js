export default class User {
    constructor(
        id,
        username,
        password,
        fullName,
        role,
        bio,
        createdAt
    ) {
        this.id = id;
        this.username = username;
        this.password = password;

        this.fullName = fullName;
        this.role = role;

        this.bio = bio;
        this.createdAt = createdAt;
    }
}