import usePingPong from '@/hooks/usePingPong';

const About: React.FC = () => {
  const { data, isLoading } = usePingPong();
  return (
    <div className="fr-container fr-my-15w">
      <h1>About</h1>
      <p>You say ping, server says: {isLoading ? '...loading' : (data ?? 'oops')}</p>
    </div>
  );
};

export default About;
