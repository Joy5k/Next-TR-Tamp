import { ReactNode } from 'react';
import '@/src/app/globals.css';


export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    
        <div className="min-h-full">
    
            
            {/* Main content */}
            <main className="flex-1 pb-8">
              {children}
            </main>
         
        </div>
     
  );
}