const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
      </div>
    </div>
  );
}

function FriendsList() {
  const Friends = initialFriends;

  return (
    <ul>
      {Friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Button({ children }) {
  return <Button className="button">{children}</Button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label> friend name</label>
      <input type="text" />

      <label> Image URL</label>
      <input type="text" />
      <Button></Button>
    </form>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>you and {friend.name} are even. </p>}

      <Button>Select</Button>
    </li>
  );
}
