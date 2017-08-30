class Project < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :comments

  has_many :images

  has_many :likes, dependent: :destroy
end
