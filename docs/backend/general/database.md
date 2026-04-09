# Database Schema Overview

This project uses **Supabase (PostgreSQL)**.

## Tables

### 1. `users`
| Column | Type | Default | Description |
|--------|------|---------|-------------|
| `id` | uuid | uuid_generate_v4() | Primary Key (Auth.uid) |
| `email` | text | | User email |
| `full_name`| text | | User full name |
| `role` | text | 'user' | 'user' or 'admin' |
| `created_at`| timestamp | now() | |

### 2. `blogs`
| Column | Type | Default | Description |
|--------|------|---------|-------------|
| `id` | uuid | uuid_generate_v4() | Primary Key |
| `title` | text | | Article Title |
| `slug` | text | | URL-friendly slug |
| `content` | text | | Markdown or HTML content |
| `image_url` | text | | Cover image URL |
| `author_id` | uuid | | Foreign Key to `users.id` |
| `created_at`| timestamp | now() | |
| `updated_at`| timestamp | now() | |

## Row Level Security (RLS)
- **Blogs**: Read-only for public. Write/Update/Delete restricted to `role == 'admin'`.
- **Users**: Users can only read/update their own profiles. Admin can manage all.
