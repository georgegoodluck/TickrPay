import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0d1117' }}>
      <Sidebar />
      <main style={{ marginLeft: '220px', flex: 1, padding: '32px', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}