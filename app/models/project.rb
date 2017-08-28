class Project < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :comments
end
