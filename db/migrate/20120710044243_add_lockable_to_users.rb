class AddLockableToUsers < ActiveRecord::Migration
    def change
      change_table :users do |t|
        # if you already have a email column, you have to comment the below line and add the :encrypted_password column manually (see devise/schema.rb).
        ## Lockable
        t.integer  :failed_attempts, :default => 0 # Only if lock strategy is :failed_attempts
        t.string   :unlock_token # Only if unlock strategy is :email or :both
        t.datetime :locked_at
        t.boolean :banned
        t.text :lock_reason
        t.datetime :locked_until
        
      end
    end
  
end
