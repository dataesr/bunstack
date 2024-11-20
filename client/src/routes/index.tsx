import useServerHealth from '@/hooks/useServerHealth';

const Home: React.FC = () => {
  const { data, isLoading } = useServerHealth();
  return (
    <>
      <div className="fr-container fr-my-15w">
        <h1>Home</h1>
        <p>Server status: {isLoading ? '...loading' : data?.healthy ? 'Healthy' : 'Down'}</p>
      </div>
    </>
  );
};

export default Home;
