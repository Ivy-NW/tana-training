interface UserProfile {
  id: number;
  username: string;
  settings?: {
    notifications?: boolean;
  };
}

const users: UserProfile[] = [
  {
    id: 1,
    username: "ivy",
    settings: {
      notifications: true,
    },
  },
  {
    id: 2,
    username: "julia",
    settings: {
      notifications: false,
    },
  },
  {
    id: 3,
    username: "john",
  },
];

function isNotified(user: UserProfile): boolean {
  return user.settings?.notifications ?? false;
}

users.forEach((user) => {
  console.log(
    `User: ${user.username} | Notifications enabled: ${isNotified(user)}`,
  );
});
