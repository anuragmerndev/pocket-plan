export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  created_at: string;
  metadata?: Record<string, unknown>;
}

export interface WaitlistInsert {
  name: string;
  email: string;
  metadata?: Record<string, unknown>;
}

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: WaitlistEntry;
        Insert: WaitlistInsert;
        Update: Partial<WaitlistInsert>;
      };
    };
  };
}
