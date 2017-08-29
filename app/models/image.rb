class Image < ApplicationRecord

  validates :project_id, presence: true

  belongs_to :project

  has_one :user,
  through: :project,
  source: :user

  has_attached_file :image #, default_url: "test_user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


end
