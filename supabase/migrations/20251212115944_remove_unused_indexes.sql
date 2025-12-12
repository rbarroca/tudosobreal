/*
  # Remove Unused Indexes

  ## Overview
  This migration removes unused indexes from the email_subscribers table to improve database performance and reduce storage overhead.

  ## Changes Made
  
  ### Removed Indexes
  1. **idx_email_subscribers_email** - Removed redundant index on email column
     - The UNIQUE constraint on the email column already creates an index automatically
     - This separate index was redundant and unused
  
  2. **idx_email_subscribers_created_at** - Removed unused index on created_at column
     - No queries are currently utilizing this index
     - Can be re-added in the future if query patterns change

  ## Performance Impact
  - Reduces storage overhead
  - Eliminates unnecessary index maintenance on INSERT/UPDATE operations
  - No negative impact on query performance since these indexes were not being used

  ## Notes
  - The email column remains indexed through its UNIQUE constraint
  - If future queries require sorting/filtering by created_at, the index can be re-added
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_email_subscribers_email;
DROP INDEX IF EXISTS idx_email_subscribers_created_at;