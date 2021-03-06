json.channel do
  json.extract! @channel, :title, :id, :is_dm, :user_ids
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :messageable_type, :messageable_id
      json.author message.author.format_username
      json.timestamp message.created_at.strftime("%-I:%M %p")
      # json.photoUrl url_for(message.author.photo)
    end
  end
end

json.users do
  @channel.users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username

      if user.photo.attached?
        json.photoUrl url_for(user.photo)
      end
    end
  end
end
