import { FC, memo, useCallback, useState } from 'react';

type Item = { value: string };

const initialItems: Item[] = new Array(3).fill({ value: '' });

// List

const SidorenkoOptimizedList: FC = () => {
  console.log('>>> parent list re-render');

  const [count, setCount] = useState(0);
  const [items, setItems] = useState(initialItems);

  const handleClick = () => {
    setCount(count + 1);
  };

  const onChange = useCallback(
    (id: number, value: string) =>
      setItems((prevItems) =>
        prevItems.map((item, index) => {
          return index !== id ? item : { value: value };
        })
      ),
    []
  );

  return (
    <div>
      <h1>Parent</h1>
      <p>Holds the state: {count}. Doesn't pass it to items.</p>
      <button onClick={handleClick}>Update Parent</button>
      <hr style={{ margin: '16px 0' }} />
      <div
        style={{ marginBottom: 16 }}
      >{`[${items.map(({ value }) => `{ "value": "${value}" }`)}]`}</div>
      <div style={{ display: 'flex', gap: 32 }}>
        {items.map((item, index) => (
          <ListItem key={index} id={index} value={item.value} onChange={onChange} />
        ))}
      </div>
    </div>
  );
};

// List Item

type ListItemProps = {
  id: number;
  value: string;
  onChange: (id: number, value: string) => void;
};

const ListItem: FC<ListItemProps> = memo(({ id, value, onChange }) => {
  console.log(`>>> list item ${id} re-render`);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        border: '1px solid #ccc',
        padding: 16,
        borderRadius: 4,
      }}
    >
      Item
      <input type="text" value={value} onChange={(e) => onChange(id, e.target.value)} />
    </div>
  );
});

export default SidorenkoOptimizedList;
